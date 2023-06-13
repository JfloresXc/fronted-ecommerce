export default function Spinner() {
  return (
    <>
      <div className="spinner">
        <div className="spinner-content">
          <div className="double-bounce1 bg-primary"></div>
          <div className="double-bounce2 bg-primary"></div>
        </div>
      </div>
      <style>
        {`
            .spinner {
                position: fixed;
                top: 0;
                bottom: 0;
                left: 0;
                right: 0;
                margin: 100px auto;
                display: flex;  
                justify-content: center;
                align-items: center;
                backdrop-filter: blur(2px);
                z-index: 100;
            }
            .spinner-content {
                position: relative;
                --size: 80px;
                width: var(--size);
                height: var(--size);
            }

            .double-bounce1, .double-bounce2 {
                width: 100%;
                height: 100%;
                border-radius: 50%;
                opacity: 0.6;
                position: absolute;
                top: 0;
                left: 0;
            
                -webkit-animation: sk-bounce 2.0s infinite ease-in-out;
                animation: sk-bounce 2.0s infinite ease-in-out;
            }

            .double-bounce2 {
            -webkit-animation-delay: -1.0s;
            animation-delay: -1.0s;
            }

            @-webkit-keyframes sk-bounce {
            0%, 100% { -webkit-transform: scale(0.0) }
            50% { -webkit-transform: scale(1.0) }
            }

            @keyframes sk-bounce {
            0%, 100% { 
                transform: scale(0.0);
                -webkit-transform: scale(0.0);
            } 50% { 
                transform: scale(1.0);
                -webkit-transform: scale(1.0);
            }
            }
            `}
      </style>
    </>
  )
}
