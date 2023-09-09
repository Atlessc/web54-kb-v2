import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { useState, useEffect, useErrorBoundary } from 'react';
import '../styles/Article.css';

function Article() {
  const { id } = useParams();
  const [markdown, setMarkdown] = useState('');
  const [_, setError] = useErrorBoundary();

  useEffect(() => {
    const path = `/public/${id}.md`;
    console.log(`Fetching markdown file from absolute path: ${window.location.origin}${path}`);
    fetch(path)
      .then((response) => {
        if (!response.ok) { throw response }
        return response.text()
      })
      .then((text) => setMarkdown(text))
      .catch((error) => {
        console.log(`There was an error: ${error}`);
        setError(error);
      });
  }, [id, setError]);

  return (
    <div>
      <h1>yes its working</h1>
      <ReactMarkdown className='markdown'>{markdown}</ReactMarkdown>
    </div>
  );
}

export default Article;
