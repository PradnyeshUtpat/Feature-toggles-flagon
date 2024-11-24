import React, { useState } from 'react';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import './Page1.css';
import { useNavigate } from 'react-router-dom';
  // For navigating back to Home page

const Page1 = () => {
  const [copyStatus, setCopyStatus] = useState('');
  

  const handleCopyClick = (code) => {
    navigator.clipboard.writeText(code).then(() => {
      setCopyStatus('Copied!');
      setTimeout(() => setCopyStatus('Copy'), 2000); // Reset text after 2 seconds
    });
  };

const navigate = useNavigate();

const goBackHome = () => {
  navigate('/');
};

  return (
    <div className="page1-bg">
      <div className="page1-container">
        <button className="back-button" onClick={goBackHome}>Back to Home</button>
        <div className="page1-header">
          <h2>Implementing Feature Toggles with Python Flagon Library</h2>
          <p>A step-by-step guide to using Flagon for feature flagging in your Python application.</p>
        </div>

        <section className="content-section">
          <h3>1. Setting Up Your Python Environment</h3>
          <p>
            To start using Flagon for feature toggles, you need to install the library. You can install Flagon using pip:
          </p>
          <div className="code-block">
            <SyntaxHighlighter language="bash" style={docco}>
              {`pip install flagon`}
            </SyntaxHighlighter>
            
          </div>
        </section>

        <section className="content-section">
          <h3>2. Creating a Backend Configuration</h3>
          <p>
            Flagon works with various backends to store feature flag configurations. One of the simplest backends is the `JSONFileBackend`, which stores configurations in a JSON file. Here's how you can create a backend configuration:
          </p>
          <div className="code-block">
            <SyntaxHighlighter language="python" style={docco}>
              {`from flagon.backends.jsonfile import JSONFileBackend
const backend = JSONFileBackend('example/config.json')`}
            </SyntaxHighlighter>
            
          </div>
        </section>

        <section className="content-section">
          <h3>3. Writing the Feature Flag Decorator</h3>
          <p>
            The main component of Flagon is the feature flag decorator. You can use it to wrap functions and control their execution based on the feature toggle status.
          </p>
          <div className="code-block">
            <SyntaxHighlighter language="python" style={docco}>
              {`from flagon import Feature
feature = Feature(backend, logger)`}
            </SyntaxHighlighter>
            
          </div>
        </section>

        <section className="content-section">
          <h3>4. Feature Configuration Example</h3>
          <p>
            Here is an example of how your `config.json` file could look like:
          </p>
          <div className="code-block">
            <SyntaxHighlighter language="json" style={docco}>
              {`{
  "on": {
    "active": true,
    "strategy": null,
    "params": {}
  },
  "off": {
    "active": false,
    "strategy": null,
    "params": {}
  }
}`}
            </SyntaxHighlighter>
            
          </div>
        </section>

        <section className="content-section">
          <h3>5. Running the Application</h3>
          <p>
            When you run the application, you will see the output based on the feature flag status:
          </p>
          <div className="code-block">
            <SyntaxHighlighter language="bash" style={docco}>
              {`* Executing feature 'on' with 'asd':
FROM t() asd

* Executing feature 'off' (which is turned off) with 'asd'
Disabled feature off was requested`}
            </SyntaxHighlighter>
            
          </div>
        </section>

        <section className="content-section">
          <h3>6. Additional Notes</h3>
          <p>
            - Make sure to configure the backend and logger properly.
          </p>
          <p>
            - You can use other backends like database or Redis for more advanced scenarios.
          </p>
        </section>

        {copyStatus && <div className="copy-toast">{copyStatus}</div>}
      </div>
    </div>
  );
};

export default Page1;
