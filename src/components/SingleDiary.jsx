function SingleDiary({title, mood, weather, picture, description}) {
  return <div className="diary-card min-h-[500px] border-solid flex flex-col items-center">
<h2 className="text-4xl">{title}</h2>
  <p>{mood}</p>
  <p>{weather}</p>
  <img src={picture} alt={title}/>
  <p>{description}</p>
    </div>;
}

export default SingleDiary;
