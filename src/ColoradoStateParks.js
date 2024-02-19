import howManyParks from './parks/howManyParks'
import MesaVerde from './parks/MesaVerde'
import { trees as parkTrees } from './parks/RockyMountain'
import { wildlife, elevation } from './parks/RockyMountain'

export default function ColoradoStateParks() {
	howManyParks() // => "42 parks!"
  console.log(parkTrees)
  wildlife()
  elevation()

	return (
    <>
      <h1>Colorado State Parks!</h1>
      <MesaVerde /> 
    </>
  )
}