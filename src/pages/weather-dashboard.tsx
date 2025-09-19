import WeatherSkeleton from '@/components/loading-skeleton';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button'
import { useGeolocation } from '@/hooks/use-geolocation'
import { CheckCircle2Icon, MapPin, RefreshCcw } from 'lucide-react'

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
  return <WeatherSkeleton />;
}


if (locationError) {
  return (
    <>
      <Alert variant="destructive">
        <CheckCircle2Icon />
        <AlertDescription className='flex flex-col gap-4'>
          <p>{locationError}</p>
          <Button onClick={getLocation} variant={'outline'} className='w-fit'>
            <MapPin className='mr-2 h-4 w-4' />
            Enable Location
          </Button>
        </AlertDescription>
      </Alert>
    </>
  );
}

if (!coordinates) {
  return (
    <>
      <Alert variant="destructive">
        <AlertTitle>Location Required</AlertTitle>
        <CheckCircle2Icon />
        <AlertDescription className='flex flex-col gap-4'>
          <p>Please enable location services to see your local weather.</p>
          <Button onClick={getLocation} variant={'outline'} className='w-fit'>
            <MapPin className='mr-2 h-4 w-4' />
            Enable Location
          </Button>
        </AlertDescription>
      </Alert>
    </>
  );
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