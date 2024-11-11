'use client';

import { FormEventHandler, useEffect, useState } from 'react';

export default function HomePage() {
  const [data, setData] = useState<string>('');
  const [res, setRes] = useState();

  const handleSubmit: FormEventHandler = async (e) => {
    e.preventDefault();

    await fetch('/api', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ data }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log('Success api', data);
        setRes(data.data);
      })
      .catch((err) => console.error('Failure', err));
  };

  useEffect(() => {
    fetch('/api')
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  }, []);

  return (
    <>
      <div>home</div>
      <div>form</div>

      <form onSubmit={handleSubmit}>
        <span>input: </span>
        <input
          className="border border-gray-300 py-1 px-2"
          type="text"
          value={data}
          onChange={(e) => {
            setData(e.currentTarget.value);
          }}
        />
        <button type="submit" className="border border-gray-300 py-1 px-2">
          submit
        </button>
      </form>

      <div>Response: {res && res}</div>
    </>
  );
}
