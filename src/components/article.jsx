import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import React, { useState, useEffect } from 'react';
import '../styles/Article.css';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Sorry, something went wrong.</h1>;
    }

    return this.props.children;
  }
}

function Article() {
  const { id } = useParams();
  const [markdown, setMarkdown] = useState('');

  useEffect(() => {
    const path = `/public/${id}.md`;
    console.log(`Fetching markdown file from absolute path: ${window.location.origin}${path}`);
    fetch(path)
      .then((response) => {
        if (!response.ok) { throw response }
        return response.text()
      })
      .then((text) => setMarkdown(text))
      .catch((error) => console.log(`There was an error: ${error}`));
  }, [id]);

  return (
    <ErrorBoundary>
      <div>
        <h1>yes its working</h1>
        <ReactMarkdown className='markdown'>{markdown}</ReactMarkdown>
      </div>
    </ErrorBoundary>
  );
}

export default Article;
