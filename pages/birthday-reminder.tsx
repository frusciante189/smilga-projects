import Image from 'next/image'
import React, { useState } from 'react'

const data = [
  {
    id: 1,
    name: 'John Frusciante',
    age: 52,
    image:
      'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80',
  },
  {
    id: 2,
    name: 'Anthony Kiedis',
    age: 59,
    image:
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80',
  },
  {
    id: 3,
    name: 'Flea',
    age: 61,
    image:
      'https://images.unsplash.com/photo-1519699047748-de8e457a634e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
  },
  {
    id: 4,
    name: 'Chad Smith',
    age: 60,
    image:
      'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  },
]

const Index: React.FC = () => {
  const [people, setPeople] = useState(data)
  return (
    <section className="flex min-h-screen items-center justify-center bg-purple-300">
      <div className="space-y-5 rounded-xl bg-purple-50 p-10 drop-shadow-xl">
        <div className="">
          <h1 className="text-3xl font-medium capitalize text-neutral-800">
            {people.length} Birthdays today
          </h1>
        </div>
        <div className="min-w-[400px] space-y-6">
          {people.map((item, index) => {
            const { id, name, age, image } = item
            return (
              <div className="flex items-center space-x-4" key={index}>
                <>
                  <div className="relative h-16 w-16 overflow-hidden rounded-full">
                    <Image src={image} layout="fill" objectFit="cover" />
                  </div>
                </>
                <div>
                  <p className="font-medium text-neutral-800">{name}</p>
                  <p className="text-neutral-500">{age}</p>
                </div>
              </div>
            )
          })}
        </div>
        <div>
          <button
            className="w-full rounded-xl bg-purple-600 py-2 text-xl text-neutral-50"
            onClick={() => setPeople([])}
          >
            Clear All
          </button>
        </div>
      </div>
    </section>
  )
}

export default Index
