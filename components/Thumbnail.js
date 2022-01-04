import Image from 'next/image';
import { ThumbUpIcon } from '@heroicons/react/outline';
import { forwardRef } from 'react';

// eslint-disable-next-line react/display-name
const Thumbnail = forwardRef(({ result }, ref) => {
	const BASE_URL = 'https://image.tmdb.org/t/p/original/';
	return (
		<div
			ref={ref}
			className="z-50 p-2 transition duration-100 ease-in transform cursor-pointer sm:hover:scale-105"
		>
			<Image
				layout="responsive"
				src={`${BASE_URL}${result.backdrop_path || result.poster_path}  `}
				height={720}
				width={1280}
				alt="photo"
			/>

			<div className="p-2">
				<p className="max-w-md truncate">{result.overview}</p>
				<h2 className="mt-1 text-2xl text-white duration-100 ease-in-out transtion-all group-hover:font-bold">
					{result.title || result.original_name}
				</h2>
				<p className="flex capitalize opacity-0 item-center hover:opacity-100 ">
					{result.media_type && `${result.media_type}`}{' '}
					{result.release_date && `${result.release_date}`}{' '}
					<ThumbUpIcon className="h-5 mx-2" /> {result.vote_count}
				</p>
			</div>
		</div>
	);
});

export default Thumbnail;
