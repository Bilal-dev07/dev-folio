import { FaNodeJs } from 'react-icons/fa';
import HomePage from './HomePage';
import fs from 'fs/promises';
import path from 'path';

// import { ref, get } from "firebase/database"
// import { database } from "@/firebase"

async function getData() {
  // return await (await get(ref(database))).val()
  const filePath = path.join(process.cwd(), 'data.json'); // Adjust path as needed
  const jsonData = await fs.readFile(filePath, 'utf-8');
  const data = JSON.parse(jsonData);
  return data;
}

export default async function page() {
  const data = await getData();

  return (
    <>
      {data ? (
        <HomePage data={data} />
      ) : (
        <div className="h-screen w-screen flex flex-col items-center justify-center gap-5 text-violet-600 fixed z-30 bg-gray-100 dark:bg-grey-900">
          <FaNodeJs size={100} className="animate-pulse" />
          <p className="animate-pulse text-xl">Loading...</p>
        </div>
      )}
    </>
  );
}
