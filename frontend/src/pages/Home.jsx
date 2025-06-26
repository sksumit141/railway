import React, { useState, useRef, useEffect } from "react";
import Form from "../components/Form";

const LocoIcon = ({ onClick, bgColor = '#4f8cff', bogieNumber = 1 }) => (
  <button
    onClick={onClick}
    style={{
      background: bgColor,
      border: 'none',
      borderRadius: '1.5rem',
      padding: '1rem',
      cursor: 'pointer',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
      margin: '0.5rem',
      position: 'relative'
    }}
    aria-label={`Show Train Form for Bogie ${bogieNumber}`}
  >
    <svg width="48" height="32" viewBox="0 0 48 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="6" y="12" width="30" height="10" rx="2" fill="#fff" stroke="#222" strokeWidth="2"/>
      <rect x="28" y="7" width="8" height="8" rx="2" fill="#b3e5fc" stroke="#222" strokeWidth="2"/>
      <rect x="36" y="14" width="6" height="6" rx="1.5" fill="#fff" stroke="#222" strokeWidth="2"/>
      <circle cx="12" cy="26" r="3" fill="#90caf9" stroke="#222" strokeWidth="2"/>
      <circle cx="32" cy="26" r="3" fill="#90caf9" stroke="#222" strokeWidth="2"/>
      <circle cx="40" cy="20" r="2" fill="#90caf9" stroke="#222" strokeWidth="2"/>
      <rect x="10" y="16" width="8" height="4" rx="1" fill="#b3e5fc" stroke="#222" strokeWidth="1.5"/>
      <rect x="20" y="16" width="8" height="4" rx="1" fill="#b3e5fc" stroke="#222" strokeWidth="1.5"/>
    </svg>
    <div style={{
      position: 'absolute',
      bottom: '-20px',
      left: '50%',
      transform: 'translateX(-50%)',
      fontSize: '12px',
      fontWeight: 'bold',
      color: '#333'
    }}>
      Bogie {bogieNumber}
    </div>
  </button>
);

const Modal = ({ isOpen, onClose, children }) => {
  const modalRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1000
    }}>
      <div ref={modalRef} style={{
        background: 'white',
        borderRadius: '8px',
        maxWidth: '90vw',
        maxHeight: '90vh',
        overflow: 'auto'
      }}>
        {children}
      </div>
    </div>
  );
};

const Home = () => {
  const [showForm, setShowForm] = useState(false);
  const [bogies, setBogies] = useState([1, 2, 3]); // Start with 3 bogies
  const [selectedBogie, setSelectedBogie] = useState(null);

  const handleBogieClick = (bogieNumber) => {
    setSelectedBogie(bogieNumber);
    setShowForm(true);
  };

  const addBogie = () => {
    setBogies([...bogies, bogies.length + 1]);
  };

  const closeForm = () => {
    setShowForm(false);
    setSelectedBogie(null);
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Home Page</h1>
      
      <div style={{ marginBottom: '2rem' }}>
        <button
          onClick={addBogie}
          style={{
            background: '#28a745',
            color: 'white',
            border: 'none',
            borderRadius: '0.5rem',
            padding: '0.75rem 1.5rem',
            cursor: 'pointer',
            fontSize: '1rem',
            fontWeight: 'bold',
            marginBottom: '1rem'
          }}
        >
          + Add Bogie
        </button>
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
        {bogies.map((bogieNumber) => (
          <LocoIcon
            key={bogieNumber}
            onClick={() => handleBogieClick(bogieNumber)}
            bgColor={bogieNumber % 2 === 0 ? '#4f8cff' : '#ff6b4f'}
            bogieNumber={bogieNumber}
          />
        ))}
      </div>

      <Modal isOpen={showForm} onClose={closeForm}>
        <div style={{ padding: '1rem' }}>
          <div style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center',
            marginBottom: '1rem',
            borderBottom: '1px solid #eee',
            paddingBottom: '1rem'
          }}>
            <h2 style={{ margin: 0, color: '#333' }}>
              Bogie {selectedBogie} - Task Form
            </h2>
            <button
              onClick={closeForm}
              style={{
                background: 'none',
                border: 'none',
                fontSize: '1.5rem',
                cursor: 'pointer',
                color: '#666'
              }}
            >
              ×
            </button>
          </div>
          <Form bogieNumber={selectedBogie} />
        </div>
      </Modal>
    </div>
  );
};

export default Home;
