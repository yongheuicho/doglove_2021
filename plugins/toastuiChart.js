export default function(chartType, elName, data) {
	if (typeof elName != 'string') return false;
	const el = document.getElementById(elName);
	if (el == null || el == undefined) return false;
	const options = {
		chart: { width: 'auto', height: 'auto' },
	};

	if (chartType == 'line') toastui.Chart.lineChart({ el, data, options });
	else if (chartType == 'bar')
		toastui.Chart.barChart({
			el,
			data,
			options,
		});
	else if (chartType == 'pie')
		toastui.Chart.pieChart({
			el,
			data,
			options,
		});
	return true;
}
