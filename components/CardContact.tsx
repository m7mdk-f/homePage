import { Comment } from '@/app/schema/db';
import Image from 'next/image';
import React from 'react'



function CardContact({ comment }: { comment: Comment }) {
    return (
        <div
        
            key={comment.id}
            className="pb-4 "
        >
            <div className="flex  gap-3">
                <div className='  flex justify-start items-start'>
                    <div className=' relative w-14 h-14 rounded-full border overflow-hidden'>
                        <Image
                            fill
                            src={comment.avatar}
                            alt={comment.name}
                            className=" object-cover"
                        />
                    </div>
                </div>
                <div className='flex rounded-lg p-3 flex-wrap gap-2  justify-between border w-full'>
                    <div className='flex flex-col gap-3'>
                        <p className="text-lg line-clamp-1">{comment.name}</p>
                        <p className="text-sm text-gray-500">{comment.comment}</p>
                    </div>
                    <p className="text-sm text-gray-400 ">{comment.timeAgo}</p>
                </div>
            </div>
        </div>
    )
}

export default CardContact