
import { Button } from '@/components/ui/button';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
// import { useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import { setSearchedQuery } from '@/redux/jobSlice';

const category = [
     "Frontend Developer",
     "Backend Developer",
     "Data Science",
     "Graphic Designer",
     "FullStack Developer"
]

const CategoryCarousel = () => {
     return (
          <div>
               <Carousel className="w-full paddingbuttom paddingcontainer">
                    <CarouselContent>
                         {
                              category.map((cat, index) => (
                                   <CarouselItem key={index} className="md:basis-1/4 lg-basis-1/6">
                                        <Button variant="outline" className="rounded-full">{cat}</Button>
                                   </CarouselItem>
                              ))
                         }
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
               </Carousel>
          </div>
     )
}

export default CategoryCarousel