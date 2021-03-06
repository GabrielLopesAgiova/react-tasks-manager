import React from 'react'
import List from '../List'
import { loadLists } from '../../services/api'
import { Container } from './styles'


export default function Board() {

  const lists = loadLists()

  return (
    <Container>
      {lists.map(list => <List key={list.title} data={list} />)}
    </Container>
  )
}
