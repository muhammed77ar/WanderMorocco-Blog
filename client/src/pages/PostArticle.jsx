import { useRef, useState } from "react";
import axiosClient from "../axios/axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2"

export default function PostArticle() {
  const contentRef = useRef(null);
  const [imagePreviews, setImagePreviews] = useState([]);
  const [fileList, setFileList] = useState([]);
  const [dragging, setDragging] = useState(false);
  const navigate = useNavigate();

  const MAX_FILE_SIZE = 3048 * 1024; // 2 MB in bytes

const handleFileChange = (e) => {
  const files = Array.from(e.target.files);

  if (files.length + fileList.length > 10) {
    alert('You can only upload a maximum of 10 images.');
    return;
  }

  // Filter out files that are too large
  const validFiles = files.filter(file => file.size <= MAX_FILE_SIZE);
  const invalidFiles = files.filter(file => file.size > MAX_FILE_SIZE);

  if (invalidFiles.length > 0) {
    alert(`Some files are too large. Each file must be smaller than ${MAX_FILE_SIZE / (1024 * 1024)} MB.`);
  }

  // Create new previews
  const newPreviews = validFiles.map(file => URL.createObjectURL(file));

  // Update state with new valid files and previews
  setFileList(prevFiles => [...prevFiles, ...validFiles]);
  setImagePreviews(prevPreviews => [...prevPreviews, ...newPreviews]);

  // Clear the file input value
  e.target.value = '';
};

const handleDrop = (e) => {
  e.preventDefault();
  setDragging(false);

  const files = Array.from(e.dataTransfer.files);

  if (files.length + fileList.length > 10) {
    alert('You can only upload a maximum of 10 images.');
    return;
  }

  // Filter out files that are too large
  const validFiles = files.filter(file => file.size <= MAX_FILE_SIZE);
  const invalidFiles = files.filter(file => file.size > MAX_FILE_SIZE);

  if (invalidFiles.length > 0) {
    alert(`Some files are too large. Each file must be smaller than ${MAX_FILE_SIZE / (1024 * 1024)} MB.`);
  }

  // Create new previews
  const newPreviews = validFiles.map(file => URL.createObjectURL(file));

  // Append new previews to existing previews
  setFileList(prevFiles => [...prevFiles, ...validFiles]);
  setImagePreviews(prevPreviews => [...prevPreviews, ...newPreviews]);

  // Clear the file input value
  e.target.value = '';
};


  const handleDragOver = (e) => {
    e.preventDefault();
    setDragging(true);
  };

  const handleDragLeave = () => {
    setDragging(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('content', contentRef.current.value);

    if (fileList.length > 10) {
      alert('You can only upload a maximum of 10 images.');
      return;
    }

    // Append each image file to formData
    fileList.forEach(file => {
      formData.append('images[]', file);
    });

    try {
      const response = await axiosClient.post('/api/posts', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Your journey has been successfully posted.',
        showConfirmButton: false,
        timer: 2000,
        willClose: () => {
            navigate('/user/articles');
        }
    });
      console.log(response.data);

      // Clear the input fields and states
      contentRef.current.value = '';
      setFileList([]); // Clear file list
      setImagePreviews([]); // Clear image previews
    } catch (error) {
      console.error('There was an error creating the post!', error.response);
    }
  };
  const handelReset = () => {
    contentRef.current.value = "";
    setImagePreviews([]);
    setFileList([]);
  }

  return (
    <div className="py-20 bg-[url('../images/2150763780.jpg')] bg-no-repeat bg-cover">
      <form onSubmit={handleSubmit}>
        <div className="mx-auto w-10/12 flex flex-col gap-4 text-gray-800 p-4 shadow-lg max-w-2xl bg-gray-100 rounded-xl bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20">
          <div className="heading text-center font-bold text-2xl text-white">New Post</div>

          <textarea
            ref={contentRef}
            className="description bg-gray-50 sec p-3 h-60 border border-gray-300 rounded-2xl outline-none"
            spellCheck="false"
            placeholder="Share your journey..."
          ></textarea>

          <label htmlFor="file-input"
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}>
            {imagePreviews.length > 0 ?
              <div className="relative flex flex-wrap items-center justify-center gap-2 p-2 border border-gray-300 rounded-2xl bg-gray-50">
                {imagePreviews.map((src, index) => (
                  <div key={index} className="relative w-24 h-24 bg-gray-100 border border-gray-300 rounded-lg overflow-hidden">
                    <img
                      src={src}
                      alt={`Preview ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
              : <div className="relative flex flex-col items-center justify-center py-9 w-full border border-gray-300 border-dashed rounded-2xl cursor-pointer bg-gray-50">
                <div className="mb-3 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                    <g id="Upload 02">
                      <path
                        id="icon"
                        d="M16.296 25.3935L19.9997 21.6667L23.7034 25.3935M19.9997 35V21.759M10.7404 27.3611H9.855C6.253 27.3611 3.33301 24.4411 3.33301 20.8391C3.33301 17.2371 6.253 14.3171 9.855 14.3171V14.3171C10.344 14.3171 10.736 13.9195 10.7816 13.4326C11.2243 8.70174 15.1824 5 19.9997 5C25.1134 5 29.2589 9.1714 29.2589 14.3171H30.1444C33.7463 14.3171 36.6663 17.2371 36.6663 20.8391C36.6663 24.4411 33.7463 27.3611 30.1444 27.3611H29.2589"
                        stroke="#d67940"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                      />
                    </g>
                  </svg>
                </div>
                <h2 className="text-center text-gray-400 text-xs font-normal leading-4 mb-1">JPG, JPEG, PNG or GIF, smaller than 3MB</h2>
                <h4 className="text-center text-gray-900 text-sm font-medium leading-snug">Drag and Drop your images here or choose images</h4>
              </div>}
            <input
              id="file-input"
              type="file"
              accept="image/*"
              multiple
              onChange={handleFileChange}
              className="hidden"
            />
          </label>

          {/* buttons */}
          <div className="buttons flex">
            <button type="button" onClick={handelReset} className="btn border border-gray-300 p-1 px-4 font-semibold cursor-pointer text-white ml-auto">Cancel</button>
            <button type="submit" className="btn border-none p-1 px-6 font-semibold cursor-pointer text-white ml-2 bg-[#d67940]">Post</button>
          </div>
        </div>
      </form>
    </div>
  );
}
