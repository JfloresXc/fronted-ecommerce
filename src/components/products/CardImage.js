import Image from 'next/image'
import { TrashIcon } from '../icons'
import { DEFAULT_PARAMS } from '@/utils/paramsDefault'
const { urlImgDefault } = DEFAULT_PARAMS

export default function CardImage({
  isPreview = true,
  isPrincipal = false,
  url = urlImgDefault,
  fileName,
  deleteImage,
}) {
  return (
    <>
      <article
        className="flex flex-col group overflow-hidden rounded-md transition-all duration-300 shadow relative group mx-auto hover:bg-gray-200"
        title="Fresh Express Iceberg Garden Salad Blend"
      >
        <Image
          className="h-[200px] max-w-full  object-cover"
          src={url}
          alt={fileName}
          width={200}
          height={200}
        />
        {!isPreview && (
          <>
            <button
              className="absolute top-2 left-2 inline-flex items-center justify-center w-8 h-8 text-sm rounded-full bg-primary text-white focus:outline-none focus-visible:outline-none  transition-opacity duration-300 ease-in-out"
              type="button"
              onClick={deleteImage}
            >
              <TrashIcon />
            </button>
            {/* <button
              className={`absolute top-2 right-2 inline-flex items-center justify-center w-8 h-8 text-sm rounded-full text-white focus:outline-none focus-visible:outline-none  transition-opacity duration-300 ease-in-out
            ${isPrincipal ? 'bg-primary' : 'bg-gray-500'}
          `}
              type="button"
            >
              <CheckCircleIcon />
            </button> */}
          </>
        )}
        <div className="flex-grow flex flex-col justify-between">
          <div className="flex-1 px-4 py-2 flex flex-col justify-between">
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-900 truncate">
                {fileName}
              </p>
            </div>
          </div>
        </div>
      </article>
    </>
  )
}
