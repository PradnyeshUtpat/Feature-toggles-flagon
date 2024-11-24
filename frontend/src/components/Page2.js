import React, { useState } from 'react';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import './Page2.css';
import { useNavigate } from 'react-router-dom';

const Page2 = () => {
  const [copyStatus, setCopyStatus] = useState('');
  
  const handleCopyClick = (code) => {
    navigator.clipboard.writeText(code).then(() => {
      setCopyStatus('Copied!');
      setTimeout(() => setCopyStatus(''), 2000); // Reset copy status after 2 seconds
    });
  };

  const navigate = useNavigate();

  const goBackHome = () => {
    navigate('/');
  };

  return (
    <div className="page2-bg">
      <div className="page2-container">
        <button className="back-button" onClick={goBackHome}>Back to Home</button>
        <div className="page2-header">
          <h2>Implementing Feature Toggles with Java Togglz Library</h2>
          <p>A step-by-step guide to using Togglz for feature flagging in your Java application.</p>
        </div>

        <section className="content-section">
          <h3>1. Setting Up Your Java Environment</h3>
          <p>
            To get started with Togglz for feature toggling, you need to add the Togglz dependency to your Maven or Gradle project:
          </p>
          <div className="code-block">
            <SyntaxHighlighter language="bash" style={docco}>
              {`<dependency>
  <groupId>org.togglz</groupId>
  <artifactId>togglz-core</artifactId>
  <version>2.9.2</version>
</dependency>`}
            </SyntaxHighlighter>
            
          </div>
        </section>

        <section className="content-section">
          <h3>2. Creating a Feature Enum</h3>
          <p>
            In Togglz, the features are represented as enums. You define the available features in your application by creating an enum:
          </p>
          <div className="code-block">
            <SyntaxHighlighter language="java" style={docco}>
              {`public enum MyFeatures implements Feature {
    FEATURE_ONE,
    FEATURE_TWO;
}`}
            </SyntaxHighlighter>
            
          </div>
        </section>

        <section className="content-section">
          <h3>3. Configuring Togglz</h3>
          <p>
            Next, you need to set up Togglz by configuring it with a backend, such as an in-memory or database-based backend.
          </p>
          <div className="code-block">
            <SyntaxHighlighter language="java" style={docco}>
              {`public class FeatureManagerProvider {
    private static final FeatureManager featureManager;

    static {
        featureManager = new InMemoryFeatureManager();
    }

    public static FeatureManager getFeatureManager() {
        return featureManager;
    }
}`}
            </SyntaxHighlighter>
            
          </div>
        </section>

        <section className="content-section">
          <h3>4. Using the Feature Toggles in Your Application</h3>
          <p>
            You can now check the status of your feature flags in your application code using Togglz's API:
          </p>
          <div className="code-block">
            <SyntaxHighlighter language="java" style={docco}>
              {`if (FeatureManagerProvider.getFeatureManager().isActive(MyFeatures.FEATURE_ONE)) {
    // Execute code for FEATURE_ONE
}`}
            </SyntaxHighlighter>
            
          </div>
        </section>

        <section className="content-section">
          <h3>5. Feature Configuration Example</h3>
          <p>
            Here is an example of how your feature configuration might look:
          </p>
          <div className="code-block">
            <SyntaxHighlighter language="json" style={docco}>
              {`{
  "FEATURE_ONE": true,
  "FEATURE_TWO": false
}`}
            </SyntaxHighlighter>
            
          </div>
        </section>

        <section className="content-section">
          <h3>6. Running the Application</h3>
          <p>
            When you run the application, the behavior of the features will depend on whether the feature toggle is active or not:
          </p>
          <div className="code-block">
            <SyntaxHighlighter language="bash" style={docco}>
              {`* Feature FEATURE_ONE is enabled
Executing feature 'FEATURE_ONE'...

* Feature FEATURE_TWO is disabled
Skipping feature 'FEATURE_TWO'...`}
            </SyntaxHighlighter>
            
          </div>
        </section>

        <section className="content-section">
          <h3>7. Additional Notes</h3>
          <p>
            - Ensure your feature manager is properly configured for different backends (like database or Redis).
          </p>
        </section>

        {copyStatus && <div className="copy-toast">{copyStatus}</div>}
      </div>
    </div>
  );
};

export default Page2;
