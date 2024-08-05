// src/components/RichTextEditor.js
import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import styles

const RichTextEditor = ({ value, onChange }) => {
  const modules = {
    toolbar: [
      [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }],
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      ['link', 'image', 'video'],
      [{ 'align': [] }],
      ['clean']
    ],
  };

  return (
    <ReactQuill 
      value={value} 
      onChange={onChange} 
      modules={modules} 
      theme="snow" 
    />
  );
};

export default RichTextEditor;
