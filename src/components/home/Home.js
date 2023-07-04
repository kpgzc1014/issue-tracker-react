import React from 'react'
import { useGlobalContext } from '../../context'
import Task from './Task'

const Home = () => {
  const {tasks} = useGlobalContext()

  return (
    <div>
        <table class="table table-bordered">
            <thead>
                <tr>
                    <th scope="col" style={{width:"20%"}}>WAITING</th>
                    <th scope="col" style={{width:"20%"}}>DEVELOPING</th>
                    <th scope="col" style={{width:"20%"}}>WAIT FOR TEST</th>
                    <th scope="col" style={{width:"20%"}}>TESTING</th>
                    <th scope="col" style={{width:"20%"}}>COMPLETED</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        {
                            // eslint-disable-next-line array-callback-return
                            tasks.map((task) => {
                                if(task.level === "waitting")
                                return <Task task={task} />
                            })
                        }
                    </td>
                    <td>
                        {
                            // eslint-disable-next-line array-callback-return
                            tasks.map((task) => {
                                if(task.level === "developing")
                                return <Task task={task} />
                            })
                        }
                    </td>
                    <td>
                        {
                            // eslint-disable-next-line array-callback-return
                            tasks.map((task) => {
                                if(task.level === "wait for test")
                                return <Task task={task} />
                            })
                        }
                    </td>
                    <td>
                        {
                            // eslint-disable-next-line array-callback-return
                            tasks.map((task) => {
                                if(task.level === "testing")
                                return <Task task={task} />
                            })
                        }
                    </td>
                    <td>
                        {
                            // eslint-disable-next-line array-callback-return
                            tasks.map((task) => {
                                if(task.level === "completed")
                                return <Task task={task} />
                            })
                        }
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default Home
