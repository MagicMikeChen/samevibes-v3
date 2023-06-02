import Image from 'next/image';
import { useRouter } from 'next/router';
import { FaRegThumbsUp, FaThumbsUp, FaRegCommentAlt } from 'react-icons/fa';
import { BsPlayCircleFill } from 'react-icons/bs';

import { useDispatch } from 'react-redux';
import Link from 'next/link';
import second from 'react-icons';
import {
  toggleLike,
  toggleProfileLike,
} from '../../../store/actionCreators/postAction';
import { translateMaker } from '../../utils';
import { IPost } from '../../../store/reducerTypes';
import {
  setAudioTrack,
  setPlayerOpen,
} from '../../../store/actionCreators/systemAction';

type PostContentProps = {
  postItem: IPost;
  isNotHome: boolean;
  scrollToTop?: (event: React.MouseEvent<HTMLElement>) => void;
};
const PostContent = (props: PostContentProps) => {
  const { scrollToTop, isNotHome } = props;
  const {
    userId,
    userName,
    userAvatar,
    postType,
    contentObj,
    isLiked,
    postId,
  } = props.postItem;
  const router = useRouter();
  const t = translateMaker(router);

  const dispatch = useDispatch();

  const dispatchAudioTrack = () => {
    dispatch(setAudioTrack(contentObj));
    dispatch(setPlayerOpen());
  };

  const dispatchToggleLike = (postId) => {
    {
      isNotHome
        ? dispatch(toggleProfileLike(postId))
        : dispatch(toggleLike(postId));
    }
  };
  return (
    <div className="cs-block-style-white-theme dark:cs-block-style-grey-900 text-gray-600 divide-y divide-gray-300 dark:divide-gray-500 dark:text-white">
      <div className="px-4 py-2 lg:py-4">
        <div className="flex content-center items-center py-4 text-center">
          {isNotHome ? (
            <div
              className="relative aspect-square h-16 w-16 min-w-min lg:h-20 lg:w-20 2xl:h-28 2xl:w-28"
              onClick={scrollToTop}
            >
              {userAvatar.length > 0 && (
                <Image
                  className="cursor-pointer rounded-full"
                  src={userAvatar}
                  alt="me"
                  layout="fill"
                  objectFit="cover"
                />
              )}
            </div>
          ) : (
            <Link href={`/user/${userId}`} passHref>
              <div className="relative aspect-square h-16 w-16 min-w-min lg:h-20 lg:w-20 2xl:h-28 2xl:w-28">
                {userAvatar.length > 0 && (
                  <Image
                    className="cursor-pointer rounded-full"
                    src={userAvatar}
                    alt="me"
                    layout="fill"
                    objectFit="cover"
                  />
                )}
              </div>
            </Link>
          )}
          <div className="flex-col justify-start pl-4 text-left">
            {postType === 'album' ? (
              <div className="lg:text-lg">
                <span className="">{userName}</span>
                <span className="pl-2">{t['txt-listen']}</span>
                <span className="pl-1">{contentObj.audioTitle}</span>
              </div>
            ) : (
              <div className="lg:text-lg">
                <span className="">{userName}</span>
                <span className="pl-2">{t['txt-will-attend']}</span>
                <span className="pl-1">{contentObj.contentTitle}</span>
              </div>
            )}
          </div>
        </div>
        {postType === 'album' ? (
          <div className="flex pb-4">
            <div className="flex items-center pl-20 lg:pl-24 2xl:pl-32">
              <div
                className="group relative aspect-square h-20 w-20 min-w-min cursor-pointer lg:h-24 lg:w-24 2xl:h-28 2xl:w-28"
                onClick={dispatchAudioTrack}
              >
                <div className="absolute left-[calc(55%_-_1rem)] top-[calc(52%_-_1rem)] z-10 text-white opacity-0 group-hover:opacity-100">
                  <BsPlayCircleFill></BsPlayCircleFill>
                </div>

                {contentObj.audioImage.length > 0 && (
                  <Image
                    className="rounded-md"
                    src={`/img/${contentObj.audioImage}.jpeg`}
                    alt="me"
                    layout="fill"
                    objectFit="cover"
                  />
                )}
              </div>
              <div className="pl-4 lg:text-lg">
                <div>{contentObj.audioTitle}</div>
                <div className="text-gray-500 dark:text-gray-400">{contentObj.album}</div>
              </div>
            </div>
          </div>
        ) : (
          <div className="pb-1">
            <div className="relative aspect-video w-full">
              {contentObj.contentPhoto.length > 0 && (
                <Image
                  src={`/img/${contentObj.contentPhoto}.jpg`}
                  sizes="100%"
                  alt="content"
                  layout="fill"
                  objectFit="cover"
                />
              )}
            </div>
          </div>
        )}
      </div>
      <div className="flex justify-center">
        <div
          className="cs-post-btn-style flex justify-center items-center rounded-bl-xl text-lg"
          onClick={() => dispatchToggleLike(postId)}
        >
          {isLiked ? (
            <FaRegThumbsUp className='mr-2'></FaRegThumbsUp>
          ) : (
            <FaThumbsUp className='mr-2'></FaThumbsUp>
          )}
          {t['txt-like']}
        </div>
        <div className="cs-post-btn-style flex justify-center items-center rounded-br-xl text-lg">
          <FaRegCommentAlt className='mr-2'></FaRegCommentAlt>
          {t['txt-comment']}
        </div>
      </div>
    </div>
  );
};

export default PostContent;
