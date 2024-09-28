'use client';

import Image from 'next/image';
import MainLayout from './layouts/MainLayout';
import ClientOnly from './components/ClientOnly';
import PostMain from './components/PostMain';

export default function Home() {
  return (
    <>
      <MainLayout>
        <div className="mt-[80px] w-[calc(100%-90px)] max-w-[690px] ml-auto">
          <ClientOnly>
            <PostMain
              post={{
                id: '1',
                user_id: '1',
                video_url: '/beach.mp4',
                text: 'this is test video',
                created_at: '20240928',
                profile: {
                  user_id: '1',
                  name: 'User 1',
                  image: 'https://placehold.co/100',
                },
              }}
            />
          </ClientOnly>
        </div>
      </MainLayout>
    </>
  );
}
