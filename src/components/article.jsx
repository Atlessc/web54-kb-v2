import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { useState, useEffect } from 'react';
import '../styles/Article.css';

function Article() {
  const { id } = useParams();
  console.trace();
  const [markdown, setMarkdown] = useState('');

  useEffect(() => {
    const path = `public/${id}.md`;
    console.log(`Fetching markdown file from path: ${path}`);
    fetch(path)
      .then((response) => response.text())
      .then((text) => setMarkdown(text));
  }, [id]);

  return (
    <div>
        <h1>yes its working</h1>
<ReactMarkdown className='markdown'>{markdown}</ReactMarkdown>;
</div>
)}

export default Article;
