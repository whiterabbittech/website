let
  pkgs = import (fetchTarball https://channels.nixos.org/nixpkgs-22.11-darwin/nixexprs.tar.xz) {};
  nodejs = pkgs.nodejs-16_x;
  yarn = pkgs.yarn.override { inherit nodejs; };

in pkgs.mkShell {
  buildInputs = [
    nodejs
    yarn
  ];

  shellHook = ''
    yarn set version 3.3.0
  '';
}
