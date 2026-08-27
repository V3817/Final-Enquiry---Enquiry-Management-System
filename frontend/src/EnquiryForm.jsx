import React, { useEffect, useState } from "react";
import { Label, Textarea, TextInput, Button } from "flowbite-react";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Swal from 'sweetalert2';

// --- Table Component ---
function EnquiryList({ enquiries, onEdit, onDelete }) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border border-gray-300 text-sm">
        <thead className="bg-gradient-to-r from-purple-200 via-pink-100 to-blue-100">
          <tr>
            <th className="p-2 border">#</th>
            <th className="p-2 border">Name</th>
            <th className="p-2 border">Email</th>
            <th className="p-2 border">Phone</th>
            <th className="p-2 border">Message</th>
            <th className="p-2 border">Edit</th>
            <th className="p-2 border">Delete</th>
          </tr>
        </thead>
        <tbody>
          {enquiries.map((enq, idx) => (
            <tr key={enq._id || idx} className="bg-white even:bg-purple-50 transition-all hover:bg-pink-100">
              <td className="p-2 border text-center font-bold text-purple-500">{idx + 1}</td>
              <td className="p-2 border">{enq.name}</td>
              <td className="p-2 border">{enq.email}</td>
              <td className="p-2 border">{enq.phone}</td>
              <td className="p-2 border">{enq.message}</td>
              <td className="p-2 border text-center">
                <button
                  onClick={() => onEdit(enq, idx)}
                  className="text-blue-600 hover:underline font-medium"
                >
                  Edit
                </button>
              </td>
              <td className="p-2 border text-center">
                <button
                  onClick={() => onDelete(enq._id)}
                  className="text-red-600 hover:underline font-medium"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
          {enquiries.length === 0 && (
            <tr>
              <td colSpan={7} className="p-4 text-center text-gray-500">
                No enquiries yet.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

// --- CRUD App Component ---
export default function EnquiryForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [enquiries, setEnquiries] = useState([]);
  const [editId, setEditId] = useState(null); // Store the Mongo _id if editing

  // Input handler
  const getvalue = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Fetch data from API
  const getEnquiries = () => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/api/enquirydata`)
      .then((res) => res.data)
      .then((finaldata) => {
        if (finaldata.status) {
          setEnquiries(finaldata.enquiries);
        } else {
          setEnquiries([]);
        }
      })
      .catch(() => setEnquiries([]));
  };

  // Create/Update
  const saveEnquiry = (e) => {
    e.preventDefault();
    const formdata = { ...form };
    if (editId) {
      axios
        .put(`${import.meta.env.VITE_BACKEND_URL}/api/updaten/${editId}`, formdata)
        .then(() => {
          toast.success("Enquiry updated!");
          setForm({ name: "", email: "", phone: "", message: "" });
          setEditId(null);
          getEnquiries();
        })
        .catch((err) => {
          toast.error("Update failed!");
          console.log(err.response ? err.response.data : err);
        });
    } else {
      axios
        .post(`${import.meta.env.VITE_BACKEND_URL}/api/en-insert`, formdata)
        .then(() => {
          toast.success("Enquiry submitted!");
          setForm({ name: "", email: "", phone: "", message: "" });
          getEnquiries();
        })
        .catch((err) => {
          toast.error("Submission failed!");
          console.log(err.response ? err.response.data : err);
        });
    }
  };

  // Edit handler
  const handleEdit = (enq) => {
    setForm({
      name: enq.name,
      email: enq.email,
      phone: enq.phone,
      message: enq.message,
    });
    setEditId(enq._id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Delete handler with SweetAlert2
  const handleDelete = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "This enquiry will be deleted permanently!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`${import.meta.env.VITE_BACKEND_URL}/api/deleten/${id}`)
          .then(() => {
            toast.success("Deleted!");
            getEnquiries();
            Swal.fire('Deleted!', 'The enquiry has been deleted.', 'success');
          })
          .catch(() => {
            toast.error("Delete failed!");
            Swal.fire('Error', 'Delete failed!', 'error');
          });
      }
    });
  };

  // On mount, load data
  useEffect(() => {
    getEnquiries();
  }, []);

  // --- Main UI with creative background ---
  return (
    <div className="min-h-screen flex flex-col justify-center items-center 
      bg-gradient-to-br from-blue-100 via-purple-100 to-pink-200 
      relative overflow-hidden">
      {/* Blurry Decorative Blobs */}
      <div className="absolute -top-36 -left-24 w-[450px] h-[450px] rounded-full bg-purple-300 opacity-30 blur-2xl z-0"></div>
      <div className="absolute -bottom-40 -right-12 w-[400px] h-[400px] rounded-full bg-pink-200 opacity-40 blur-2xl z-0"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/2 rounded-full bg-blue-100 opacity-25 blur-3xl z-0"></div>

      <div className="z-10 w-full max-w-6xl">
        <ToastContainer />
        <h1 className="text-4xl text-center py-6 font-bold mb-2 text-purple-700 drop-shadow-md tracking-wide">
          Enquiry Management
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-[30%_auto] gap-8 px-4">
          {/* FORM */}
          <div className="bg-white bg-opacity-90 p-6 rounded-2xl shadow-xl ring-1 ring-purple-100 z-10">
            <h2 className="text-lg font-semibold mb-4">
              {editId ? "Edit Enquiry" : "Enquiry Form"}
            </h2>
            <form className="space-y-4" onSubmit={saveEnquiry}>
              <div>
                <Label htmlFor="enquiry-name" value="Name" />
                <TextInput
                  id="enquiry-name"
                  name="name"
                  type="text"
                  placeholder="Name"
                  required
                  value={form.name}
                  onChange={getvalue}
                />
              </div>
              <div>
                <Label htmlFor="enquiry-email" value="Email" />
                <TextInput
                  id="enquiry-email"
                  name="email"
                  type="email"
                  placeholder="Email"
                  required
                  value={form.email}
                  onChange={getvalue}
                />
              </div>
              <div>
                <Label htmlFor="enquiry-phone" value="Phone" />
                <TextInput
                  id="enquiry-phone"
                  name="phone"
                  type="text"
                  placeholder="Phone"
                  required
                  value={form.phone}
                  onChange={getvalue}
                />
              </div>
              <div>
                <Label htmlFor="enquiry-message" value="Message" />
                <Textarea
                  id="enquiry-message"
                  name="message"
                  placeholder="Message"
                  required
                  value={form.message}
                  onChange={getvalue}
                />
              </div>
              <Button type="submit" color="blue">
                {editId ? "Update" : "Submit"}
              </Button>
              {editId && (
                <button
                  type="button"
                  className="ml-2 px-4 py-2 bg-gray-200 rounded"
                  onClick={() => {
                    setEditId(null);
                    setForm({ name: "", email: "", phone: "", message: "" });
                  }}>
                  Cancel
                </button>
              )}
            </form>
          </div>
          {/* TABLE */}
          <div className="p-4 bg-white bg-opacity-90 rounded-2xl shadow-xl ring-1 ring-blue-100 z-10 mt-3 md:mt-0">
            <h2 className="text-lg font-semibold mb-4">Enquiry Table</h2>
            <EnquiryList
              enquiries={enquiries}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
