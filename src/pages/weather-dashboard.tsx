import { Button } from '@/components/ui/button'
import { useGeolocation } from '@/hooks/use-geolocation'
import { RefreshCcw } from 'lucide-react'

const WeatherDashboard = () => {

const { coordinates, error:locationError, isLoading:locationLoading, getLocation } = useGeolocation();

console.log(coordinates);

const handleRefresh = () => {
  getLocation();
  if (coordinates) {
    //reload weather data
  }
};
if (locationLoading) {
  console.error(locationError);
}

  return (
    <div className='space-y-4'>
      <div className='flex items-center justify-between'>
        <h1 className='text-xl font-bold tracking-tight'>My Location</h1>
        <Button variant={'outline'} size={'icon'} onClick={handleRefresh}>
          <RefreshCcw className='h-4 w-4 cursor-pointer' />
        </Button>
      </div>
    </div>
  )
}

export default WeatherDashboard