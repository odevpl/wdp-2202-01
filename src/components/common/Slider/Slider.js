import { useState } from 'react';

const Slider = ({ children }) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const previousSlide = () => {
    let slide = activeSlide - 1 < 0 ? children.length - 1 : activeSlide - 1;
    setActiveSlide(slide);
  };
  const nextSlide = () => {
    let slide = activeSlide + 1 < children.length ? activeSlide + 1 : 0;
    setActiveSlide(slide);
  };
};
