import type { MetaFunction } from '@remix-run/node'
import { Heading } from '@/catalyst/heading'

import { EllipsisVerticalIcon } from '@heroicons/react/20/solid'
import { ArrowPathIcon } from '@heroicons/react/24/outline'
import { ClientLayout } from '@/client-layout'
import { version } from 'react'

const classNames = (...classes: string[]) => classes.filter(Boolean).join(' ')

export const meta: MetaFunction = () => {
  return [
    { title: 'Fusion Track Client App' },
    { name: 'description', content: 'Welcome to Fusion Track!' },
  ]
}

const plans = [
  {
    id: 1,
    name: 'AML-001',
    date: '2022-05-15',
    sender: 'OVO',
    receiver: 'Bank BCA',
    customer: 'John Doe',
    nik: '1234567890',
    amount: '10000',
    indication: 'Suspicious Activity',
    transactionCount: 15,
  },
  {
    id: 2,
    name: 'AML-002',
    date: '2022-05-15',
    sender: 'Ajaib',
    receiver: 'Bank BCA',
    customer: 'John Doe',
    nik: '1234567890',
    amount: '10000',
    indication: 'Online Gambling',
    transactionCount: 15,
  },
  {
    id: 2,
    name: 'AML-002',
    date: '2022-05-15',
    sender: 'Ajaib',
    receiver: 'Bank BCA',
    customer: 'John Doe',
    nik: '1234567890',
    amount: '10000',
    indication: 'Suspicious Activity',
    transactionCount: 15,
  },
]
const models = [
  {
    id: 1,
    version: 'V.1.0',
    date: '2022-05-15',
    accuracy: 92,
    precision: 89,
    recall: 91,
  },
]

export function TableModel() {
  return (
    <div className="-mx-4 mt-4 ring-1 ring-gray-300 sm:mx-0 sm:rounded-lg">
      <table className="min-w-full divide-y divide-gray-300">
        <thead>
          <tr>
            <th
              scope="col"
              className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
            >
              Model Version
            </th>
            <th
              scope="col"
              className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell"
            >
              Date Trained
            </th>
            <th
              scope="col"
              className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell"
            >
              Accuracy
            </th>
            <th
              scope="col"
              className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell"
            >
              Precision
            </th>
            <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
              Recall
            </th>

            <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
              <span className="sr-only">Select</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {models.map((plan, planIdx) => (
            <tr key={planIdx}>
              <td
                className={classNames(
                  planIdx === 0 ? '' : 'border-t border-gray-200',
                  'relative py-4 pl-4 pr-3 text-sm sm:pl-6'
                )}
              >
                <div className="font-medium text-gray-900">{plan.version}</div>
              </td>
              <td
                className={classNames(
                  planIdx === 0 ? '' : 'border-t border-gray-200',
                  'hidden px-3 py-3.5 text-sm text-gray-500 lg:table-cell'
                )}
              >
                {plan.date}
              </td>
              <td
                className={classNames(
                  planIdx === 0 ? '' : 'border-t border-gray-200',
                  'hidden px-3 py-3.5 text-sm text-gray-500 lg:table-cell'
                )}
              >
                {plan.accuracy}%
              </td>
              <td
                className={classNames(
                  planIdx === 0 ? '' : 'border-t border-gray-200',
                  'hidden px-3 py-3.5 text-sm text-gray-500 lg:table-cell'
                )}
              >
                {plan.precision}%
              </td>
              <td
                className={classNames(
                  planIdx === 0 ? '' : 'border-t border-gray-200',
                  'hidden px-3 py-3.5 text-sm text-gray-500 lg:table-cell'
                )}
              >
                {plan.recall}%
              </td>

              <td
                className={classNames(
                  planIdx === 0 ? '' : 'border-t border-transparent',
                  'relative py-3.5 pl-3 pr-4 text-right text-sm font-medium sm:pr-6'
                )}
              >
                <button
                  type="button"
                  className="inline-flex items-center rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-white"
                >
                  Select<span className="sr-only">, {plan.version}</span>
                </button>
                {planIdx !== 0 ? (
                  <div className="absolute -top-px left-0 right-6 h-px bg-gray-200" />
                ) : null}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export function Table() {
  return (
    <div className="-mx-4 mt-4 ring-1 ring-gray-300 sm:mx-0 sm:rounded-lg">
      <table className="min-w-full divide-y divide-gray-300">
        <thead>
          <tr>
            <th
              scope="col"
              className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
            >
              Fraud ID
            </th>
            <th
              scope="col"
              className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell"
            >
              Date
            </th>
            <th
              scope="col"
              className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell"
            >
              Sender FI
            </th>
            <th
              scope="col"
              className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell"
            >
              Receiver FI
            </th>
            <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
              Customer ID
            </th>
            <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
              NIK
            </th>
            <th scope="col" className="px-3 py-3.5 text-right text-sm font-semibold text-gray-900">
              Transaction Amount
            </th>{' '}
            <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
              Indication
            </th>
            <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
              <span className="sr-only">Select</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {plans.map((plan, planIdx) => (
            <tr key={planIdx}>
              <td
                className={classNames(
                  planIdx === 0 ? '' : 'border-t border-gray-200',
                  'relative py-4 pl-4 pr-3 text-sm sm:pl-6'
                )}
              >
                <div className="font-medium text-gray-900">{plan.name}</div>
              </td>
              <td
                className={classNames(
                  planIdx === 0 ? '' : 'border-t border-gray-200',
                  'hidden px-3 py-3.5 text-sm text-gray-500 lg:table-cell'
                )}
              >
                {plan.date}
              </td>
              <td
                className={classNames(
                  planIdx === 0 ? '' : 'border-t border-gray-200',
                  'hidden px-3 py-3.5 text-sm text-gray-500 lg:table-cell'
                )}
              >
                {plan.sender}
              </td>
              <td
                className={classNames(
                  planIdx === 0 ? '' : 'border-t border-gray-200',
                  'hidden px-3 py-3.5 text-sm text-gray-500 lg:table-cell'
                )}
              >
                {plan.receiver}
              </td>
              <td
                className={classNames(
                  planIdx === 0 ? '' : 'border-t border-gray-200',
                  'hidden px-3 py-3.5 text-sm text-gray-500 lg:table-cell'
                )}
              >
                {plan.customer}
              </td>
              <td
                className={classNames(
                  planIdx === 0 ? '' : 'border-t border-gray-200',
                  'px-3 py-3.5 text-sm text-gray-500'
                )}
              >
                <div className="hidden sm:block">{plan.nik}</div>
              </td>
              <td
                className={classNames(
                  planIdx === 0 ? '' : 'border-t border-gray-200',
                  'px-3 py-3.5 text-sm text-gray-500 text-right'
                )}
              >
                <div className="hidden sm:block">Rp {plan.amount}</div>
              </td>
              <td
                className={classNames(
                  planIdx === 0 ? '' : 'border-t border-gray-200',
                  'px-3 py-3.5 text-sm text-gray-500'
                )}
              >
                <div className="hidden sm:block">{plan.indication}</div>
              </td>
              <td
                className={classNames(
                  planIdx === 0 ? '' : 'border-t border-transparent',
                  'relative py-3.5 pl-3 pr-4 text-right text-sm font-medium sm:pr-6'
                )}
              >
                <button
                  type="button"
                  className="inline-flex items-center rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-white"
                >
                  Select<span className="sr-only">, {plan.name}</span>
                </button>
                {planIdx !== 0 ? (
                  <div className="absolute -top-px left-0 right-6 h-px bg-gray-200" />
                ) : null}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

const projects = [
  {
    name: 'Data Health Indicators',
    initials: 'HI',
    href: '#',
    text: 'Healthy',
    bgColor: 'bg-green-600',
  },

  {
    name: 'Fraud Indications',
    initials: 'FI',
    href: '#',
    text: '3.000',
    bgColor: 'bg-red-500',
  },
  {
    name: 'AML/CFT Alerts',
    initials: 'CA',
    href: '#',
    text: '1.200',
    bgColor: 'bg-yellow-500',
  },
  {
    name: 'Total Records Processed',
    initials: 'RP',
    href: '#',
    text: '1.200.000',
    bgColor: 'bg-green-600',
  },
]

export function Stat() {
  return (
    <ul className="mt-3 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
      {projects.map((project) => (
        <li key={project.name} className="col-span-1 flex rounded-md shadow-sm">
          <div
            className={classNames(
              project.bgColor,
              'flex w-16 flex-shrink-0 items-center justify-center rounded-l-md text-sm font-medium text-white'
            )}
          >
            {project.initials}
          </div>
          <div className="flex flex-1 items-center justify-between truncate rounded-r-md border-b border-r border-t border-gray-200 bg-white">
            <div className="flex-1 truncate px-4 py-2 text-sm">
              <a href={project.href} className="font-medium text-gray-900 hover:text-gray-600">
                {project.name}
              </a>
              <p className="text-gray-500">{project.text}</p>
            </div>
            <div className="flex-shrink-0 pr-2">
              <button
                type="button"
                className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-transparent bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                <span className="sr-only">Open options</span>
                <EllipsisVerticalIcon className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          </div>
        </li>
      ))}
    </ul>
  )
}

export default function Home() {
  return (
    <ClientLayout>
      <Heading>Good afternoon, Jessica</Heading>

      <div className="mt-8 flex items-end justify-between">
        <div className="flex items-center justify-between mt-8 [--gutter:theme(spacing.6)] lg:[--gutter:theme(spacing.10)]">
          <h2 className="text-base font-semibold leading-7 text-gray-900">Overview</h2>
        </div>
      </div>
      <div className="mt-4">
        <Stat />
      </div>

      <div className="flex items-center justify-between mt-8 [--gutter:theme(spacing.6)] lg:[--gutter:theme(spacing.10)]">
        <h2 className="text-base font-semibold leading-7 text-gray-900">Model Training History</h2>
        <div className="mt-4 sm:ml-auto sm:mt-0 sm:flex-none">
          <button className="flex items-center gap-2 rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            <ArrowPathIcon className="h-6 w-6" />
          </button>
        </div>
      </div>
      <TableModel />
      <div className="flex items-center justify-between mt-8 [--gutter:theme(spacing.6)] lg:[--gutter:theme(spacing.10)]">
        <h2 className="text-base font-semibold leading-7 text-gray-900">AML/CFT Alert Details</h2>
        <div className="mt-4 sm:ml-auto sm:mt-0 sm:flex-none">
          <button className="flex items-center gap-2 rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            <ArrowPathIcon className="h-6 w-6" />
          </button>
        </div>
      </div>
      <Table />
    </ClientLayout>
  )
}
