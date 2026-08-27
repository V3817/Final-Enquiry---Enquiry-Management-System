import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
import './index.css';
import EnquiryForm from './EnquiryForm.jsx'; // <-- Import your form here

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <EnquiryForm />
  </StrictMode>
);
