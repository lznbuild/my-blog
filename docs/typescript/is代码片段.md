```js
import * as React from 'react'


type IProps = {}

type IState = {age:0}

const App:React.FunctionComponent<IProps> = (props:IProps)=> {

  const [age,setAge]= useState<IState>({age:0})

  const handleClick = () => {
    setAge({
      age:age.age+1
    })
  }

  return <div>app</div>
}



class App extends React.Component<IProps, IState> {
  state: IState = {
    age: 0
  }
  render() {
    return (
      <div>12</div>
    )
  }
}
```