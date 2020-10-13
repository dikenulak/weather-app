import React from 'react';
import { render, cleanup, waitForElement, fireEvent } from '@testing-library/react';
import axiosMock from 'axios';
import TestAxios from './TempTest';
jest.mock('axios');

afterEach(cleanup);

const url = `https://openweathermap.org/data/2.5/onecall?lat=27.72&lon=85.32&units=metric&appid=439d4b804bc8187953eb36d2a8c26a02`;

it('should display a loading text', () => {
	const { getByTestId } = render(<TestAxios />);

	expect(getByTestId('loading')).toHaveTextContent('Loading...');
});

test('current temp to be 30 C and its about to rain', async () => {
  const { getByTestId } = render(<TestAxios url={url} />)

  axiosMock.get.mockResolvedValueOnce({
    data: { temp: 30, clouds: 85 },
  })

  fireEvent.click(getByTestId('fetch-data'))

  const temp = await waitForElement(() => getByTestId('show-temp'))
  const clouds = await waitForElement(() => getByTestId('show-clouds'))

  expect(axiosMock.get).toHaveBeenCalledTimes(1)
  expect(axiosMock.get).toHaveBeenCalledWith(url)
  expect(temp).toHaveTextContent('30');
  expect(clouds).toHaveTextContent('85');
});
