import './App.css'
import ControlledField from './Component/ControlledField/ControlledField'
import FamilyTree from './Component/FamilyTree/FamilyTree'
import FormAction from './Component/FormAction/FormAction'
import HookForm from './Component/HookForm/HookForm'
import ProductManagement from './Component/ProductManagement/ProductManagement'
import SimpleForm from './Component/SimpleForm/SimpleForm'
import UnControlledField from './Component/UnControlledField/UnControlledField'

function App() {

  return (
    <>
      <h1 className="text-3xl text-center my-10">Explore Simple React Form</h1>
      <div className="flex flex-col justify-center items-center">
        <SimpleForm></SimpleForm>
        <div className="mt-10">
          <h1 className="text-3xl text-center mb-10">Explore Action Form</h1>
          <FormAction></FormAction>
        </div>
        <div className="mt-10">
          <h1 className="text-3xl text-center mb-10">Explore Controlled Field Form</h1>
          <ControlledField></ControlledField>
        </div>
        <div className="mt-10">
          <h1 className="text-3xl text-center mb-10">Explore Uncontrolled Field Form</h1>
          <UnControlledField></UnControlledField>
        </div>
        <div className="mt-10">
          <h1 className="text-3xl text-center mb-10">Explore Hook Form</h1>
          <HookForm></HookForm>
        </div>

        <div className="mt-10">
          <h1 className="text-3xl text-center mb-10">Product Management</h1>
          <ProductManagement></ProductManagement>
        </div>

        <div className="mt-10">
          <FamilyTree></FamilyTree>
        </div>
      </div>
    </>
  )
}

export default App
