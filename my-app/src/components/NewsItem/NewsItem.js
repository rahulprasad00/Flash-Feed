import React, { Component } from 'react'

export class NewsItem extends Component {
    

    render() {

        let {title,description,imageurl,detailurl,author,date}= this.props;

        return (
            <div className="p-4 lg:w-1/2 px-10">
              <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                
                <img alt="Not Available" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src={imageurl} />
                <div className="flex-grow sm:pl-8">
                    <a href={detailurl} rel="noreferrer" target="_blank" className=' font-medium text-lg text-gray-900 hover:text-red-600'>{title}...</a>
                  <p className="mb-4">{description}...</p>
                  <p className='font-semibold'>By {author?author:"Unknown"} on {new Date(date).toGMTString()}</p>
                </div>
              </div>
            </div>
        )
    }
}

export default NewsItem
