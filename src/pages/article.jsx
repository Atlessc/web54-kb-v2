import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { useState, useEffect } from 'react';
import '../styles/Article.css';

function Article() {
  const { id } = useParams();
  const [markdown, setMarkdown] = useState('');

  useEffect(() => {
    const path = `public/${id}.md`;
    console.log(`Fetching markdown file from path: ${path}`);
    fetch(path)
      .then((response) => response.text())
      .then((text) => setMarkdown(text));
  }, [id]);

  return <ReactMarkdown className='markdown'>{markdown}</ReactMarkdown>;
}

export default Article;
