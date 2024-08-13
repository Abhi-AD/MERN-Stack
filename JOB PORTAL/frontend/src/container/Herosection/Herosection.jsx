import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"

const Herosection = () => {

  return (
    <div className="paddingbuttom">
      <div className='text-center'>
        <div className='flex flex-col gap-5 my-10'>
          {/* <span className='mx-auto px-4 py-2 rounded-full bg-gray-100 text-[#00c0e4] font-medium'>CareerConnect: Your Path to Success</span> */}
          <h1 className='text-5xl font-bold'>
            Discover Your Next Opportunity <br /> with <span className='text-[#00c0e4]'>CareerConnect</span>
          </h1>
          <p>Empowering Opportunities, One Connection at a Time. Find and apply for the best jobs that fit your career goals.</p>
          <div className='flex w-[40%] shadow-lg border border-gray-200 pl-3 rounded-full items-center gap-4 mx-auto'>
            <input
              type="text"
              placeholder='Search for your ideal job'
              className='outline-none border-none w-full'
            />
            <Button className="rounded-r-full bg-[#00c0e4]">
              <Search className='h-5 w-5' />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Herosection
