import React from 'react';
import { format, parseISO } from 'date-fns';
import {
    FaBookmark,
    FaRegBookmark,
    FaShareNodes,
    FaEye,
    FaStar
} from 'react-icons/fa6';
import { Link } from 'react-router';

const NewsCard = ({ news }) => {

    const {
        id,
        title,
        rating,
        total_view,
        author,
        image_url,
        details,
        tags
    } = news;

    const {
        name,
        published_date,
        img: authorImg
    } = author;

    const { number: ratingNumber } = rating;

    return (
        <article className="card bg-base-100 border border-base-300 shadow-sm">

            {/* Author Section */}
            <div className="flex items-center justify-between p-4">

                <div className="flex items-center gap-3">

                    <img
                        src={authorImg}
                        alt={name}
                        className="w-10 h-10 rounded-full object-cover"
                    />

                    <div>
                        <h3 className="font-semibold text-sm">
                            {name}
                        </h3>

                        <p className="text-xs text-base-content/50">
                            {format(
                                parseISO(published_date),
                                'yyyy-MM-dd'
                            )}
                        </p>
                    </div>

                </div>

                {/* Bookmark + Share */}
                <div className="flex items-center gap-4 text-base-content/60">
                    <button
                        className="hover:text-primary transition"
                        aria-label="Bookmark"
                    >
                        <FaRegBookmark />
                    </button>

                    <button
                        className="hover:text-primary transition"
                        aria-label="Share"
                    >
                        <FaShareNodes />
                    </button>
                </div>

            </div>


            {/* News Content */}
            <div className="px-4">

                {/* Title */}
                <h2 className="font-bold text-lg leading-7 mb-4">
                    {title}
                </h2>

                {/* Image */}
                <img
                    src={image_url}
                    alt={title}
                    className="w-full h-56 object-cover rounded-md"
                />

                {/* Date + Tags */}
                <p className="text-xs text-base-content/60 mt-4 leading-5">
                    {format(
                        parseISO(published_date),
                        'EEEE, MMMM d, yyyy'
                    )}

                    {' | Tag Cloud Tags: '}

                    {tags.join(', ')}
                </p>

                {/* Details */}
                <p className="text-sm text-base-content/70 leading-6 mt-2 line-clamp-3">
                    {details}
                </p>

                {/* Read More */}
                <Link to={`/newsDetails/${id}`} className="text-secondary text-sm font-medium mt-1 hover:underline">
                    Read More
                </Link>

            </div>


            {/* Bottom Section */}
            <div className="flex items-center justify-between border-t border-base-300 mt-4 px-4 py-3">

                {/* Rating */}
                <div className="flex items-center gap-2">

                    <div className="flex text-orange-400 gap-1">
                        {
                            [...Array(5)].map((_, index) => (
                                <FaStar
                                    key={index}
                                    className={
                                        index < ratingNumber
                                            ? "text-orange-400"
                                            : "text-base-300"
                                    }
                                />
                            ))
                        }
                    </div>

                    <span className="text-sm text-base-content/60">
                        {ratingNumber}
                    </span>

                </div>


                {/* Views */}
                <div className="flex items-center gap-2 text-sm text-base-content/60">
                    <FaEye />
                    <span>{total_view}</span>
                </div>

            </div>

        </article>
    );
};

export default NewsCard;