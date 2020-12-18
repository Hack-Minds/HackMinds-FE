import React from 'react'
import '../Styles/PreviewCard.scss'

function PreviewCard({ concept, definition }) {
  return (
    <div className='previewCard'>
      <h3>{concept}</h3>
      <p>{definition}</p>
    </div>
  )
}

export default PreviewCard
