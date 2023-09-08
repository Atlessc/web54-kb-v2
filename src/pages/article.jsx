import { useParams } from 'react-router-dom';

import { useState, useEffect } from 'react';
import '../styles/Article.css';

function Article() {
  const { id } = useParams();
  const [markdown, setMarkdown] = useState('');

  useEffect(() => {
    fetch(`/${id}.md`)
      .then((response) => response.text())
      .then((text) => setMarkdown(text));
  }, [id]);

  return <ReactMarkdown className='markdown'>{markdown}</ReactMarkdown>;
}

export default Article;