export default function Icon({
	src,
	width,
	height,
}: {
	src: string;
	width?: number;
	height?: number;
}) {
	return <img class="mr-2" src={src} height={height} width={width} />;
}
