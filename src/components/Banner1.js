import React,{useState,useEffect} from 'react'
import '../styles/css/adda52.css'
import axios from 'axios'


function Banner1() {
    const [images,setimages]= useState(null);
    const [activeimage,setactiveimage]=useState(null)

    useEffect(() => {
        axios.get("https://strapi-demo-01.herokuapp.com/mainbanners")
        .then((res)=>{
          let arr =[]
          console.log(res.data[0].Image.url);
         
          arr = res.data.map((item)=>{return item.Image.url});
         
          let activeimage = arr.shift()
          setactiveimage(activeimage)
          setimages(arr);
        })
        .catch((err)=>{
          console.log(err);
        })
    }, [])

    return (
        <>
          <section id="adda-home-banner">
              <div  id="homebanner" class="carousel slide" data-bs-ride="carousel">
              <div class="carousel-inner">
                  {activeimage && 
                    <div class="carousel-item active">
                          <img class="d-block w-100" src={activeimage} alt=""/>
                    </div>}
                    {images && images.map((image) => {
                     
                      return (
                        <div class="carousel-item">
                          <img class="d-block w-100" src={image} alt=""/>
                        </div>
                      ) }
                    )}
              </div>
              <a class="carousel-control-prev" href="#homebanner" role="button" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                
              </a>
              <a class="carousel-control-next" href="#homebanner" role="button" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                
              </a>
            </div>
          </section>
        </>
    )
}

export default Banner1
