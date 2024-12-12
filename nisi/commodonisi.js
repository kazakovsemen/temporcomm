event TokenSwap(address indexed from, address indexed to, uint256 amount);

function swapTokens(address _to, uint256 _amount) public {
  // Perform the token swap logic
  // ...

  // Emit the TokenSwap event
  emit TokenSwap(msg.sender, _to, _amount);
}
