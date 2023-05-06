async function partition(low, high) {
	await sleep(delay);

	var pivot = arr[high];
	var i = low - 1;
	setColor(high, SELECTED);

	for (var j = low; j < high; j++) {
		await sleep(delay);

		if (arr[j] <= pivot) {
			i++;
			swap(i, j);
			setColor(j, RIGHT);
			setColor(i, LEFT);
		} else setColor(j, RIGHT);
	}

	if (i + 1 < high) {
		await sleep(delay);

		swap(i + 1, high);
		setColor(high, RIGHT);
		setColor(i + 1, SELECTED);
	}
	await sleep(delay);

	setColorRange(low, high, UNSORTED);

	return i + 1;
}

async function quickSort(low, high) {
	if (low < high) {
		var p = await partition(low, high);

		await quickSort(low, p - 1);

		setColorRange(low, p, SORTED);
		await quickSort(p + 1, high);

		setColorRange(p + 1, high, SORTED);
	}

	if (low == 0 && high == size - 1) await sleep(delay);
}
