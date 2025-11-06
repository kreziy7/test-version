import React, { useReducer, useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Upload, X } from 'lucide-react';
import { formReducer, initialFormState } from './formReducer';
import { useFormSubmit } from '../../hooks/useFormSubmit';
import Button from '../Button';

const SmartForm = ({ 
  title = 'Buyurtma berish', 
  fields, 
  onSubmit, 
  submitText = 'Yuborish',
  showFileUpload = false,
  eventType = null 
}) => {
  const [state, dispatch] = useReducer(formReducer, initialFormState);
  const { submitToTelegram } = useFormSubmit();
  const [dragOver, setDragOver] = useState(false);

  const handleFieldChange = (field, value) => {
    dispatch({ type: 'SET_FIELD', field, value });
  };

  const handleFileChange = (file) => {
    dispatch({ type: 'SET_FILE', file });
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setDragOver(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setDragOver(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragOver(false);
    const files = Array.from(e.dataTransfer.files);
    if (files[0]) {
      handleFileChange(files[0]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: 'SUBMIT_START' });

    try {
      const formData = {
        ...state.fields,
        file: state.file?.name || null,
        eventType: eventType,
        timestamp: new Date().toISOString(),
      };

      await submitToTelegram(formData, 'order');
      dispatch({ type: 'SUBMIT_SUCCESS' });
      
      if (onSubmit) {
        onSubmit(formData);
      }
    } catch (error) {
      dispatch({ type: 'SUBMIT_ERROR', error: error.message });
    }
  };

  const removeFile = () => {
    dispatch({ type: 'SET_FILE', file: null });
  };

  if (state.submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-8"
      >
        <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
          <Send className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          Muvaffaqiyatli yuborildi!
        </h3>
        <p className="text-gray-600 dark:text-gray-300">
          Buyurtmangiz qabul qilindi. Tez orada siz bilan bog'lanamiz.
        </p>
      </motion.div>
    );
  }

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      onSubmit={handleSubmit}
      className="space-y-6"
    >
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          {title}
        </h3>
        {eventType && (
          <p className="text-gray-600 dark:text-gray-300">
            Tadbir turi: <span className="font-semibold">{eventType}</span>
          </p>
        )}
      </div>

      {/* Form Fields */}
      <div className="grid md:grid-cols-2 gap-6">
        {fields.map((field) => (
          <div key={field.name} className={field.fullWidth ? 'md:col-span-2' : ''}>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              {field.label} {field.required && <span className="text-red-500">*</span>}
            </label>
            
            {field.type === 'textarea' ? (
              <textarea
                name={field.name}
                value={state.fields[field.name] || ''}
                onChange={(e) => handleFieldChange(field.name, e.target.value)}
                required={field.required}
                placeholder={field.placeholder}
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-colors"
              />
            ) : field.type === 'select' ? (
              <select
                name={field.name}
                value={state.fields[field.name] || ''}
                onChange={(e) => handleFieldChange(field.name, e.target.value)}
                required={field.required}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-colors"
              >
                <option value="">{field.placeholder}</option>
                {field.options.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            ) : (
              <input
                type={field.type}
                name={field.name}
                value={state.fields[field.name] || ''}
                onChange={(e) => handleFieldChange(field.name, e.target.value)}
                required={field.required}
                placeholder={field.placeholder}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-colors"
              />
            )}
          </div>
        ))}
      </div>

      {/* File Upload */}
      {showFileUpload && (
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Rasm yuklash (ixtiyoriy)
          </label>
          
          {!state.file ? (
            <div
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              className={`relative border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
                dragOver
                  ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                  : 'border-gray-300 dark:border-gray-600 hover:border-gray-400 dark:hover:border-gray-500'
              }`}
            >
              <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600 dark:text-gray-300 mb-2">
                Rasmni shu yerga sudrab olib keling yoki
              </p>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => handleFileChange(e.target.files[0])}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              />
              <Button type="button" variant="outline" size="sm">
                Fayl tanlang
              </Button>
            </div>
          ) : (
            <div className="flex items-center justify-between bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
              <div className="flex items-center space-x-3">
                <Upload className="w-5 h-5 text-green-500" />
                <span className="text-sm text-gray-900 dark:text-white">
                  {state.file.name}
                </span>
              </div>
              <button
                type="button"
                onClick={removeFile}
                className="text-gray-400 hover:text-red-500 transition-colors"
              >
                <X size={18} />
              </button>
            </div>
          )}
        </div>
      )}

      {/* Error Message */}
      {state.error && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4"
        >
          <p className="text-red-800 dark:text-red-300 text-sm">{state.error}</p>
        </motion.div>
      )}

      {/* Submit Button */}
      <Button
        type="submit"
        loading={state.submitting}
        disabled={state.submitting}
        className="w-full"
        size="lg"
      >
        {state.submitting ? 'Yuborilmoqda...' : submitText}
      </Button>
    </motion.form>
  );
};

export default SmartForm;