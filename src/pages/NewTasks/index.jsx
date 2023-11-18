import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { actFetchAllTask, setNewPage } from '../../redux/features/tasks/taskSlice'
import { TASK_STATUS } from '../../constants/task.constant'
import { Pagination, Spin } from 'antd'
import MainContentTask from '../../components/MainContentTask'

const NewTasks = () => {
  const dispatch = useDispatch()
  const { isLoading, tasks, pagination, searchKey } = useSelector(state=>state.task)

  useEffect(() => {
    dispatch(actFetchAllTask({
      _page: 1,
      _limit: pagination.limitPerPage,
      q: searchKey,
      status: TASK_STATUS.NEW
    }))

    return ()=>{
      dispatch(setNewPage(1))
    }
    // eslint-disable-next-line
  }, [])

  const handleChangePage = (NewPage)=>{
    dispatch(setNewPage(NewPage))
    dispatch(actFetchAllTask({
      _page: NewPage,
      _limit: pagination.limitPerPage,
      q: searchKey,
      status: TASK_STATUS.NEW
    }))
  }
  
  if (isLoading) {
    return <Spin/>
  }
  return (
    <div>
      {
        tasks.length === 0 ? <div>No tasks </div> : <><MainContentTask tasks={tasks}/>
        <Pagination 
        defaultPageSize={pagination.limitPerPage} 
        current={pagination.currentPage}
        total={pagination.total}
        onChange={handleChangePage}
        />
      </>}
    </div>
  )
}

export default NewTasks