import React, { useState, useRef } from 'react';
import './ToggleLamp.css';
import lampOffImg from '../../assets/Lamp/Lamp_off.png';
import lampOnImg from '../../assets/Lamp/Lamp_on.png';
import pullChainImg from '../../assets/Lamp/Chain.png';

function ToggleLamp() {
  const [isOn, setIsOn] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [dragY, setDragY] = useState(0);
  const startYRef = useRef(0);
  const triggeredRef = useRef(false);

  const handlePointerDown = (e) => {
    e.target.setPointerCapture(e.pointerId);
    setIsDragging(true);
    triggeredRef.current = false;
    startYRef.current = e.clientY;
  };

  const handlePointerMove = (e) => {
    if (!isDragging) return;
    const diffY = Math.max(0, Math.min(e.clientY - startYRef.current, 100));
    setDragY(diffY);

    // Toggle lamp when pulled past threshold
    if (diffY >= 50 && !triggeredRef.current) {
      triggeredRef.current = true;
      setIsOn((prev) => !prev);
    }
  };

  const handlePointerUp = () => {
    setIsDragging(false);
    setDragY(0); // snap back
  };

  return (
    <div className="lamp-container">
      <div className="lamp-frame">
        <img
          src={lampOffImg}
          alt="Lamp Off"
          className={`lamp-graphic ${!isOn ? 'active' : ''}`}
        />
        <img
          src={lampOnImg}
          alt="Lamp On"
          className={`lamp-graphic ${isOn ? 'active' : ''}`}
        />

        {/* Pull chain that stretches */}
        <div
          className={`chain ${isDragging ? 'dragging' : ''}`}
          style={{ height: (120 + dragY) + 'px' }}  
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerUp}
        >
          <img src={pullChainImg} alt="Pull Chain" />
        </div>
      </div>
    </div>
  );
}

export default ToggleLamp;
