import React, { useEffect, useState } from 'react';
import {
  CropperDimensions,
  PostUserCompTypes,
  ShowErrorObject,
} from '@/app/types';
import { AiOutlineClose, AiOutlineLoading3Quarters } from 'react-icons/ai';
import Link from 'next/link';
import { SiSoundcharts } from 'react-icons/si';
import { BiErrorCircle } from 'react-icons/bi';
import { useRouter } from 'next/navigation';
import { BsPencil } from 'react-icons/bs';
import TextInput from '../TextInput';

export default function EditProfileOverlay() {
  const router = useRouter();

  const [file, setFile] = useState<File | null>(null);
  const [cropper, setCropper] = useState<CropperDimensions | null>(null);
  const [uploadedImage, setUploadImage] = useState<string | null>(null);
  const [userImage, setUserImage] = useState<string | ''>(
    'https://placehold.co/100'
  );
  const [userName, setUserName] = useState<string | ''>('');
  const [userBio, setUserBio] = useState<string | ''>('');
  const [isUpdating, setIsUpdating] = useState(false);
  const [error, setError] = useState<ShowErrorObject | null>(null);

  const getUploadImage = () => {
    console.log('getUploadImage');
  };
  const showError = (type: string) => {
    if (error && Object.entries(error).length > 0 && error?.type == type) {
      return error.message;
    }
    return '';
  };

  return (
    <>
      <div
        id="EditProfileOverlay"
        className="fixed flex justify-center pt-14 md:pt-[105px] z-50 top-0 left-0 w-full h-full bg-black bg-opacity-50 overflow-auto"
      >
        <div
          className={`relative bg-white w-full max-w-[700px] sm:h-[580px] h-[655px] mx-3 p-4 rounded-lg mb-10
          ${!uploadedImage ? 'h-[655px]' : 'h-[580px]'}
          `}
        >
          <div className="absolute flex items-center justify-between w-full p-5 left-0 top-0 border-b border-b-gray-300">
            <h1 className="text-[22px] font-medium">Edit profile</h1>
            <button
              disabled={isUpdating}
              className="hover:bg-gray-200 p-1 rounded-full"
            >
              <AiOutlineClose size={25} />
            </button>
          </div>

          <div
            className={`h-[calc(500px-200px)] ${
              !uploadedImage ? 'mt-16' : 'mt-[58px]'
            }`}
          >
            {!uploadedImage ? (
              <div>
                <div
                  id="ProfilePhotoSection"
                  className="flex flex-col border-b sm:h[118px] h-[145px] px-1.5 py-2 w-full"
                >
                  <h3 className="font-semibold text-[15px] sm:mb-0 mb-1 text-gray-700 sm:w-[160px] sm:text-left text-center">
                    Profile photo
                  </h3>
                  <div className="flex items-center justify-center sm:-mt-6">
                    <label htmlFor="image" className="relative cursor-pointer">
                      <img
                        src={userImage}
                        alt=""
                        className="rounded-full "
                        width="95"
                      />
                      <button className="absolute bottom-0 right-0 rounded-full bg-white shadow-xl border p-1 border-gray-300 inline-block w-[32px] h-[32px]">
                        <BsPencil size={17} className="ml-0.5" />
                      </button>
                    </label>
                    <input
                      type="file"
                      className="hidden"
                      id="image"
                      onChange={getUploadImage}
                      accept="image/png, image/jpeg, image/jpg"
                    />
                  </div>
                </div>

                <div
                  id="UserNameSection"
                  className="flex flex-col sm:h-[118px] px-1.5 py-2 mt-1.5 w-full"
                >
                  <h3 className="font-semibold text-[15px] sm:mb-0 mb-1 text-gray-700 sm:w-[160px] sm:text-left text-center">
                    Name
                  </h3>
                  <div className="flex items-center justify-center sm:-mt-6">
                    <div className="sm:w-[60%] w-full max-w-md">
                      <TextInput
                        string={userName}
                        placeholder="Username"
                        onUpdate={setUserName}
                        inputType="text"
                        error={showError('userName')}
                      />

                      <p
                        className={`relative text-[11px] text-gray-500 ${
                          error ? 'mt-1' : 'mt-4'
                        }`}
                      >
                        Usernames can only contain letters, numbers,
                        underscores, and periods.
                      </p>
                    </div>
                  </div>
                </div>

                <div
                  id="UserBioSection"
                  className="flex flex-col sm:h-[120px] px-1.5 py-2 mt-2 w-full"
                ></div>
              </div>
            ) : (
              <div></div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
