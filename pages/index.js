import Head from 'next/head'
import Image from 'next/image'
import Layout from '@/components/Layout'
import ListsPage from './lists'
import Lists from '@/components/Lists'
import styles from '@/styles/Home.module.css'
import { useState } from "react"
import Link from 'next/link'
import { API_URL } from '@/config/index'

export default function HomePage({lists}) {
  const title = 'NJATDA: Not Just Another To Do App'
  // const [lists, setLists] = useState(lists)
  // const [lists, setLists] = useState([
  //   { id: '1', title: 'Budgies', items: ['Henry', 'Henrietta', 'Margie'], tags: ['animals', 'home']},
  //   { id: '2', title: 'Saturday To Do', items: ['Mop', 'Vacuum', 'Cook'], tags: ['home']},
  //   { id: '3', title: 'New website', items: ['Change image', 'Add event', 'Create page'], tags: ['church', 'website']},
  //   { id: '4', title: 'Song app', items: ['Draw wireframe', 'Choose technology'], tags: ['church', 'music']},
  //   { id: '5', title: 'Job sites', items: ['Indeed', 'LinkedIn'], tags: ['career']},
  //   { id: '6', title: 'Portfolio website', items: ['Renew/buy hosting', 'Link to Github', 'New colour scheme'], tags: ['career']},
  //   { id: '7', title: 'Favourite music', items: ['Opera', 'Classical', 'Jazz'], tags: ['home', 'music']},
  // ])

  return (
    <Layout title={title}>
      <Head>
        <title>{title}</title>
      </Head>

      {lists.length === 0 && <h4>No lists to display</h4>}

      <Lists lists={lists} />
    </Layout>
  )
}

export async function getStaticProps() {
  const res = await fetch(`${API_URL}/api/lists`)
  const lists = await res.json()

  return {
    props: {lists},
    revalidate: 1 // if lists are updated, get latest lists are 1 second
  }
}