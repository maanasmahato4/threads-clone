interface RightBarProps {
	className?: string;
}

const RightBar: React.FC<RightBarProps> = ({ className }) => {
	return <div className={className}>right bar</div>;
};

export default RightBar;
