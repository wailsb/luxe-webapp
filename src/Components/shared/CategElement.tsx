export default function CategElement({title,imageUrl,dimentions}:{title:string,imageUrl:string,dimentions:Array<string>}) {
    return (
        <div style={{backgroundImage:`url(${imageUrl})`,width:dimentions[0],height:dimentions[1]}} className={`relative bg-cover bg-center shrink-0`}>
            <h2 className="text-white text-lg font-semibold absolute bottom-3 left-1/2 transform -translate-x-1/2">{title}</h2>
        </div>
    );
}
