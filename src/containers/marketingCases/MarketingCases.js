// 
import React, { useState } from "react";
import "./MarketingCases.scss";
import { marketingCases } from "../../portfolio";
import { Fade } from "react-reveal";

export default function MarketingCases() {
  const [selectedCase, setSelectedCase] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!marketingCases.display) {
    return null;
  }

  const currentCase = marketingCases.cases[selectedCase];
  const totalImages = currentCase.images.length;

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % totalImages);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + totalImages) % totalImages);
  };

  const selectCase = (index) => {
    setSelectedCase(index);
    setCurrentImageIndex(0);
  };

  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="marketing-cases">
        <div className="marketing-cases-container">
          <div className="marketing-cases-header">
            <h1 className="marketing-cases-title">{marketingCases.title}</h1>
            <p className="marketing-cases-subtitle">{marketingCases.subtitle}</p>
          </div>

          <div className="case-selector">
            {marketingCases.cases.map((case_, index) => (
              <button
                key={case_.id}
                onClick={() => selectCase(index)}
                className={`case-button ${selectedCase === index ? 'active' : ''}`}
              >
                <span className="case-number">0{case_.id}</span>
                <span className="case-title">{case_.title}</span>
              </button>
            ))}
          </div>

          <div className="case-content">
            {/* 第一行：两列布局 */}
            <div className="case-info-row">
              {/* 左列：标题和描述 */}
              <div className="case-header-column">
                <div className="case-header">
                  <h3 className="case-main-title">{currentCase.title}</h3>
                  <p className="case-subtitle-text">{currentCase.subtitle}</p>
                  <p className="case-description">{currentCase.description}</p>
                </div>

                <div className="case-tags">
                  {currentCase.tags.map((tag, index) => (
                    <span key={index} className="case-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* 右列：项目成果 */}
              <div className="case-results-column">
                <div className="case-results">
                  <h4 className="results-title">📊 Project Results</h4>
                  <div className="results-list">
                    {currentCase.results.map((result, index) => (
                      <div key={index} className="result-item">
                        <span className="result-metric">{result.metric}</span>
                        <span className="result-value">
                          +{result.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* 第二行：图片轮播 */}
            <div className="case-gallery-row">
              <div className="case-gallery">
                <div className="main-image-container">
                  <div className="image-display">
                    <img 
                      src={currentCase.images[currentImageIndex]} 
                      alt={`${currentCase.title} - ${currentImageIndex + 1}`}
                      className="case-image"
                    />
                    
                    {totalImages > 1 && (
                      <>
                        <button onClick={prevImage} className="nav-arrow nav-prev">
                          &#8249;
                        </button>
                        <button onClick={nextImage} className="nav-arrow nav-next">
                          &#8250;
                        </button>
                      </>
                    )}
                  </div>
                  
                  <div className="image-counter">
                    {currentImageIndex + 1} / {totalImages}
                  </div>
                </div>

                {totalImages > 1 && (
                  <div className="thumbnail-gallery">
                    {currentCase.images.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`thumbnail ${currentImageIndex === index ? 'active' : ''}`}
                      >
                        {index + 1}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
}