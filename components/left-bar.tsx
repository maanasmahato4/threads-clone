interface LeftBarProps {
	className?: string;
}

const LeftBar: React.FC<LeftBarProps> = ({ className }) => {
	return <div className={className}>left bar</div>;
};

export default LeftBar;
